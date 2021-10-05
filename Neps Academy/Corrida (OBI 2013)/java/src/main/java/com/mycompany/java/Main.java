package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        
        String input1[] = new String[3];
        String input2[] = new String[3];
        
        input1 = scan.nextLine().split(" ");
        input2 = scan.nextLine().split(" ");
        
        float intInput1[] = new float[3];
        float intInput2[] = new float[3];
        
        for(int i=0; i < input1.length; i++){
            intInput1[i] = Float.parseFloat(input1[i]); 
        }
        
        for(int i=0; i < input1.length; i++){
            intInput2[i] = Float.parseFloat(input1[i]);
        }
        
        intInput1[1] = (intInput1[1]) / 3.6;
        
        if((intInput1[1] * intInput1[2]) < (intInput2[1] * intInput2[2])){
            System.out.println(intInput1[0]);
        }else{
            System.out.println(intInput2[0]);
        }      
    }
}