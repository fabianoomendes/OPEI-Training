package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        
        int n = scan.nextInt();
        scan.nextLine();
        String inputs = scan.nextLine().replace(" ", "");
        
        int count = 0;
        for(int i=0; i <= inputs.length() - 3; i++){;
            if(inputs.substring(i, i+3).equals("100")){
                count++;
            }
        }       
        
        System.out.println(count);
    }
}