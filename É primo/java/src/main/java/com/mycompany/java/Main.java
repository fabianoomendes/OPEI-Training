package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int N = scan.nextInt();
        
        if(N > 2 && N % 2 == 0){
            System.out.print("N");
        }else if (N >= 1) {
            int div = 0;            
            for(int i=1; i <= N; i++){
                if(N % i == 0){
                    div++;                            
                }
            }
            if(div == 2){
                System.out.print("S");
            }else{
                System.out.print("N");
            }
        }
    }
}