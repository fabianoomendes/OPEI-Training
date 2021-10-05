package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        
        int N = scan.nextInt();
        
        if(N == 0){
            System.out.println("E");
        }else if(N <= 35){
            System.out.println("D");
        }else if(N <= 60){
            System.out.println("C");
        }else if(N <= 85){
            System.out.println("B");
        }else{
            System.out.println("A");
        }
    }
}