package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        
        String input[] = new String[2];
        input = scan.nextLine().split(" ");
        int n1 = Integer.parseInt(input[0]);
        int n2 = Integer.parseInt(input[1]);
        
        int result = 0;
        while(n1 >= n2){
            n1 = n1 - n2;
            result = n1;
        }        
        System.out.println(result);
    }
}