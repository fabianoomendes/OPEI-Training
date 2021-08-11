package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        
        String inputs[] = new String[4];
        int intInputs[] = new int[inputs.length];
        inputs = scan.nextLine().split(" ");
        
        for(int i=0; i < inputs.length; i++){
            intInputs[i] = Integer.parseInt(inputs[i]);
        }
        
        int n1 = intInputs[0] * intInputs[1];
        int n2 = intInputs[2] * intInputs[3];
        
        if(n1 == n2){
            System.out.println(0);
        }else if(n1 > n2){
            System.out.println(-1);
        }else if(n1 < n2){
            System.out.println(1);
        }
    }
}