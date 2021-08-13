package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        
        int A = scan.nextInt();
        int M = scan.nextInt();
        
        if(A + M <= 50){
            System.out.println("S");
        }else{
            System.out.println("N");
        }
    }
}