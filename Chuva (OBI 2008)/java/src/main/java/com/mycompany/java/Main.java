package com.mycompany.java;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner (System.in);
        
        String inputs[] = new String[4];
        inputs = scan.nextLine().split(" ");
        int intInputs[] = new int[inputs.length];
        for(int i=0; i < inputs.length; i++){
            intInputs[i] = Integer.parseInt(inputs[i]);
        }
        
        int matriz[][] = new int[100][100];
        int N = scan.nextInt();
        scan.nextLine();
        int covered[][] = new int[N][4];
                  
        for(int i=0; i < N; i++){
            String aux[] = new String[4];
            aux = scan.nextLine().split(" ");
            covered[i][0] = Integer.parseInt(aux[0]);
            covered[i][1] = Integer.parseInt(aux[1]);
            covered[i][2] = Integer.parseInt(aux[2]);
            covered[i][3] = Integer.parseInt(aux[3]);
        }
     
        for(int i=0; i < matriz.length; i++){            
            for(int j=0; j < matriz[i].length; j++){                
                for(int k=0; k < covered.length; k++){                    
                    if(((i >= covered[k][0]) && (i <= covered[k][2])) && ((j >= covered[k][1]) && (j <= covered[k][3]))){
                        matriz[i][j] = 1;
                    }
                }
            }
        }
        
//        for(int x=0; x < matriz.length;){            
//            for(int y=0; y < matriz[x].length;){                
//                
//            }
//        }

        
        for(int i=0; i < matriz.length; i++){
            for(int j=0; j < matriz[i].length; j++){
                System.out.print(matriz[i][j]+" ");
            }
            System.out.println("\n");
        }
        
        
    }    
}