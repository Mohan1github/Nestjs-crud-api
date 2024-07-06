import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, } from "@nestjs/common"
import { data, ReportType } from "src/data";
//import { v4 as uuid} from "uuid"
import { AppService } from "./app.service";
@Controller('report/:type')
export class AppController {
  constructor(private readonly appService:AppService){}
    
  @Get()
  getAllIncomeReports(@Param('type') type: string) {
    const reporttype = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getAllIncomeReports( reporttype)
  }
  @Get(':id')
  getIncomeReportByid(@Param('type') type: string, @Param('id') id: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter((report) => report.type === reportType).find(report => report.id == id);
  }
  @Post()
  createReport(@Body() { amount, source }: { amount: number; source: string }, @Param('type') type: string,) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.createReport(reportType,{amount,source})
  }
  @Put(":id")
  updateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() body: { amount: number; source: string }
  ) {
    const reporttype = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.updateReport(reporttype,id,body)
  }
  @Delete(":id")
  DeleteReport(
    @Param("id") id: string
  ) {
    return this.DeleteReport(id);
  }
}