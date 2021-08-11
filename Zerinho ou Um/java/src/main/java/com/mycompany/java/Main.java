package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);

        String inputs[] = new String[3];
        inputs = scan.nextLine().split(" ");
       
        int n1 = Integer.parseInt(inputs[0]);
        int n2 = Integer.parseInt(inputs[1]);
        int n3 = Integer.parseInt(inputs[2]);
       
        if(n1 != n2 && n1 != n3){
            System.out.println("A");
        }else if(n2 != n1 && n2 != n3){
            System.out.println("B");
        }else if(n3 != n1 && n3 != n2){
            System.out.println("C");
        }else{
            System.out.println("*");
        }          
    }   
}