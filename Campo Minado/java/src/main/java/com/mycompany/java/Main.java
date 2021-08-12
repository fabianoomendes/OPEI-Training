package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        
        int N = scan.nextInt();
        scan.nextLine();        
        int inputs[] = new int[N];
        for(int i=0; i < N; i++){
            inputs[i] = scan.nextInt();
        }
        
        int results[] = new int[N];         
        if(N > 1){
            for(int i=0; i <= N-1; i++){
                if(i == 0){
                    results[i] = inputs[i] + inputs[i+1];
                }else if(i == N-1){
                    results[i] = inputs[i-1] + inputs[i];
                }else if(i != 0 && i != N-1){
                    results[i] = inputs[i-1] + inputs[i] + inputs[i+1];
                }else{
                    results[i] = 0;
                }
            }
        }else{
            results[0] = inputs[0];
        }
       
        for(int i=0; i < results.length; i++){
            System.out.println(results[i]);
        }
    }    
}