import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import ExcelJS from 'exceljs';
import './index.scss';

type SheetCellValue = ExcelJS.CellValue[] | {[key: string]: ExcelJS.CellValue;}
type Result = {title?: SheetCellValue, orderFilter?: Record<string, SheetCellValue[]>, all?: SheetCellValue[] };

const  ExcelKiller: React.FC = () => {
  const [fileList, setFileList] = useState<File[]>([]);
  const [sheetName, setSheetName] = useState<string>('Sheet1');
  const [orderColName, setOrderColName] = useState<string>('');
  const [filterColNames, setFilterColNames] = useState<string>('');
  

  const handleFile = async (file: File): Promise<Result> => {
    return new Promise(resolve => {
        const workbook = new ExcelJS.Workbook();
        const fileReader = new FileReader();
        fileReader.onload = async (data) => {
          const result = data?.target?.result as ArrayBuffer;
          const xlsx = await workbook.xlsx.load(result);
          const worksheet = xlsx.getWorksheet(sheetName);
          let res: Result = {};
          worksheet.getColumn(orderColName || "A").eachCell(function(cell, rowNumber) {
            const row = worksheet.getRow(rowNumber);
            const cellValue = cell.value?.toString();
            if(!cellValue) {
              return;
            }
            let rowValue = row.values;
            if(filterColNames) {
                rowValue = filterColNames.split(',').map(val => row.getCell(val.toUpperCase()).value);
            }
            if(rowNumber === 1) {
                res.title = rowValue;
            } else {
                // 存一下全部
                if(!res.all) {
                    res.all = [rowValue];
                } else {
                    res.all.push(rowValue);
                }

                if(!res.orderFilter) {
                    res.orderFilter = {};
                }
                if(!res?.orderFilter?.[cellValue]) {
                    res.orderFilter[cellValue] = [rowValue];
                } else {
                    res.orderFilter[cellValue].push(rowValue);
                }
            }
            
          });
          resolve(res);
        }
        fileReader.readAsArrayBuffer(file);
    })
  }


  const handleDeleteFile = (index: number) => {
    setFileList(list => {
        list.splice(index, 1);
        return [...list]
    });
  }

  const downloadExcel = async (workbook: ExcelJS.Workbook, fileName: string) => {
    const uint8Array = await workbook.xlsx.writeBuffer()
    const blob = new Blob([uint8Array], { type: "application/octet-binary" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.xlsx`;
    a.click();
    a.remove();
  };

  const handlePatchGenerate = async () => {
    try{
        for(let file of fileList) {
            const res = await handleFile(file);
            if(orderColName) {
                // 如果以订单号分类
                for(let [key, arr] of Object.entries(res.orderFilter || {})) {
                    const newWorkbook = new ExcelJS.Workbook();
                    const newSheet = newWorkbook.addWorksheet(sheetName);
                    newSheet.addRow(res.title);
                    arr.forEach((val: any) => {
                        newSheet.addRow(val);
                    });
                    await downloadExcel(newWorkbook, key)
                }
            } else {
                const newWorkbook = new ExcelJS.Workbook();
                const newSheet = newWorkbook.addWorksheet(sheetName);
                newSheet.addRow(res.title);
                res?.all?.forEach((val: any) => {
                    newSheet.addRow(val);
                });
                await downloadExcel(newWorkbook, file.name)
            }
            
        }
    } catch (err) {
        console.log(err);
    }
    
  };

  return (
    <div className="excel-killer">
        <div className="excel-killer-header">
            <h1>Excel Killer</h1>
            <p>一个为环亦量身定制的excel处理应用</p>
        </div>
        <div className="excel-killer-content">
            <div className="upload">
                <h2>步骤一：上传excel文件</h2>
                <Dropzone
                accept={['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']}
                onDrop={(files: File[]) => setFileList(list => list.concat(files))}
                noDrag={true}
                maxSize={1024 * 1024}
                maxFiles={1}
                >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="excel-upload-content">
                        点击或拖拽文件到此区域
                    </div>
                    </div>
                )}
                </Dropzone>
                <div className='upload-files'>
                    {fileList.map((file, index) => (
                        <div key={index} className="file-tag">
                            <span className="name">{file.name}</span>
                            <span className="close-btn" onClick={() => handleDeleteFile(index)}>X</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="config">
                <h2>步骤二：输入配置项</h2>
                <div className="config-list">
                    <div className="config-item">
                        <span>工作表名称(默认为Sheet1)：</span>
                        <input type="text" name="sheetName" placeholder="例如：Sheet1" value={sheetName} onChange={e => setSheetName(e.target.value)} />
                    </div>
                    <div className="config-item">
                        <span>按字母列进行归类(默认为空，代表不分类)：</span>
                        <input type="text" placeholder="例如：A"  name="orderColName" value={orderColName} onChange={e => setOrderColName(e.target.value)} />
                    </div>
                    <div className="config-item">
                        <span>按字母列筛选（默认不筛选，如有多个列以逗号分隔）：</span>
                        <input type="text" name="filterColNames" placeholder="例如：A,B,C,D,E"  value={filterColNames}  onChange={e => setFilterColNames(e.target.value)}  />
                    </div>
                </div>
            </div>
            <div className="last">
                <h2>步骤三：点击按钮批量生成文件</h2>
                <button disabled={!(fileList.length > 0 && !!sheetName)} onClick={handlePatchGenerate}>GO</button>
            </div>
           
        </div>
    </div>
  );
}

export default ExcelKiller;
