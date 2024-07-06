
import { ReportType,data } from "src/data";
import { Injectable } from "@nestjs/common";
interface Report {amount:number,source:string}
@Injectable()
export class AppService{
  getAllIncomeReports(type:ReportType){
    return data.report.filter((report) => report.type === type);
  }
  getIncomeReportByid(id:string,type:ReportType){
      return data.report.filter((report) => report.type == type).find((report)=> report.id  == id);
  }
  createReport(type:ReportType,{amount,source}:Report){
    const newReport = {
      id: "hujuh",
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type,

    }
    data.report.push({newReport});
    console.log(newReport)
  }
  updateReport(type:ReportType, id: string, body:Report){
    const report_up = data.report.filter((report) => report.type == type).find((report) => report.id == id);
    if (!report_up) return;

    const index = data.report.findIndex((report) => report.id === report_up.id)

    data.report[index] = {
      ...data.report[index],
      ...body,
      updated_at: new Date()

    };
  }

  Deletereport(id:string){
    const reportIndex = data.report.findIndex((report) => report.id == id)
    if (reportIndex === -1) return;

    data.report.splice(reportIndex, -1)
  }
}
