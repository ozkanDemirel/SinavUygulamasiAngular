export class ListLesson{
    lessonId: number;
    lessonCode: string;
    lessonName:string;

    public getlessonId():number{
        return this.lessonId;
    }
    public setlessonId(lessonId:number):void{
        this.lessonId=lessonId;
    }
}