package com.mycompany.a;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int lenght = scan.nextInt();
        String inputs[] = new String[lenght];
        
        for(int i=0; i < lenght; i++){
            inputs[i] = scan.next();
        }

        for (String input : inputs) {
            if (input.length() > 10) {
                System.out.println(input.charAt(0)+ "" + ((input.length() - 2)) + "" + input.charAt(input.length() - 1));
            } else {
                System.out.println(input);
            }
        }
    }
}