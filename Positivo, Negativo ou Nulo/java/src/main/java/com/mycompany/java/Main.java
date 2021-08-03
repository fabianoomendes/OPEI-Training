package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int input = scan.nextInt(); 
        
        if(input > 0){
            System.out.println("positivo");
        }else if (input < 0){
            System.out.println("negativo");
        }else{
            System.out.println("nulo");
        }        
    }    
}
