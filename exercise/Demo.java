
class car{
        String model;
        String color;
        int year;
        car(String model,String color,int year){
            this.model=model;
            this.color=color;
            this.year=year;
        }
        void displayDetails(){
            System.out.println("model:"+model);
            System.out.println("color:"+color);
            System.out.println("year:"+year);
        }
    }
    public class Demo{
        public static void main(String[]args){
            car car1=new car("Toyota","Red",2020);
            car car2=new car("thar","black",2024);
            car1.displayDetails();
            car2.displayDetails();

        }
    }
