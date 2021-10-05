package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan =  new Scanner(System.in);
        
        int number = scan.nextInt();        
        int input[] = new int[number];
        
        for(int i=0; i < number; i++){
            input[i] = scan.nextInt();
        }
        
        int sum = 0;
        int day = 0;
        for(int i=0; i < input.length; i++){
            sum += input[i];
            if(sum >= 1000000){
                day = i + 1;
                break;
            }
        }
        System.out.print(day);    
    }  
}
