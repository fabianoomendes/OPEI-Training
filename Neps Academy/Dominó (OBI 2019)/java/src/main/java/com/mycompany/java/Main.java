package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        
        int input = scan.nextInt();        
        int result = ((input + 1) * (input + 2))/2;
        System.out.println(result);
    }    
}