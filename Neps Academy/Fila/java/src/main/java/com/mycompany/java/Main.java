package com.mycompany.java;
import java.util.Scanner;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int N = scan.nextInt();
        scan.nextLine();
        String NN = scan.nextLine();
        int M = scan.nextInt();
        scan.nextLine();
        String MM = scan.nextLine();
        
        String arrayNN[] = new String[N];
        arrayNN = NN.split(" ");
        
        ArrayList listNN = new ArrayList();        
        for(int i=0; i < arrayNN.length; i++){
            listNN.add(arrayNN[i]);
        }
        
        String arrayMM[] = new String[M];
        arrayMM = MM.split(" ");                        
        
        ArrayList listMM = new ArrayList();        
        for(int i=0; i < arrayMM.length; i++){
            listMM.add(arrayMM[i]);
        }      
       
        for(int i=0; i < listMM.size(); i++){    
            int index = listNN.indexOf(listMM.get(i));
            listNN.remove(index);                        
        }
        
        String result = "";
        
        for(int i=0; i < listNN.size(); i++){
            result += listNN.get(i);
            if(i != listNN.size() - 1){
                result += " ";
            }
        }                 
        System.out.println(result);
    }
}