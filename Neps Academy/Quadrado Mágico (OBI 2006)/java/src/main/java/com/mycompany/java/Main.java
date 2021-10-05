package com.mycompany.java;
import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        
        String input[] = new String[9];
                
        for(int i=0; i < 3; i++){
            String inputs = scan.nextLine();
            input = inputs.split(" ");
        }
        
   
        for(int i=0; i < input.length; i++){            
            System.out.println(input[i]);
        }
        
        
    }    
}
