export enum ReportType{
    INCOME = "income",
    EXPENSE = "expense"
}

export const data:Data = {
    report:[{
        id: "uuid1",
    source: "salary",
    amount: 100000,
    created_at: new Date,
    updated_at: new Date,
    type: ReportType.INCOME
    },
        
            {
                id: "uuid3",
            source: "salary",
            amount: 1000000,
            created_at: new Date,
            updated_at: new Date,
            type: ReportType.INCOME
        },
        
        {
            id: "uuid4",
        source: "salary",
        amount: 5000000,
        created_at: new Date,
        updated_at: new Date,
        type: ReportType.INCOME
    }
    
    ]

}
interface Data{
    report:{
        id: string;
        source: string;
        amount: Number;
        created_at: Date;
        updated_at: Date;
        type: ReportType.INCOME
    }[]
}

data.report.push({
    id: "uuid2",
    source: "salary",
    amount: 100000,
    created_at: new Date,
    updated_at: new Date,
    type: ReportType.INCOME
})