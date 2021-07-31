package com.mycompany.java;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int bino = scan.nextInt();
        int cino = scan.nextInt();
        
        int sum = bino + cino;
        
        if(sum % 2 == 0){
            System.out.println("Bino");
        }else{
            System.out.println("Cino");
        }
    }
}
