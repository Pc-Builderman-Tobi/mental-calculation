#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void Ausgabe(int Zahl1, char Rechenoperator, int Zahl2);
char SearchingForRechenoperator(int Zahl1, int Zahl2);
int Rechnen(int Zahl1, int Zahl2, char Rechenoperator);

int main (void){
    int Zahl1;
    int Zahl2;
    int EingabeErg;
    int erg;
    
    char Rechenoperator;

    while(1){
        srand(time(NULL));

        Zahl1 = rand()%100 + 1;
        Zahl2 = rand()%100 + 1;

        Rechenoperator = SearchingForRechenoperator(Zahl1, Zahl2);
        erg = Rechnen(Zahl1, Zahl2, Rechenoperator);
        
        Ausgabe(Zahl1, Rechenoperator, Zahl2);
        
        scanf("%d", &EingabeErg);
        
        if(erg == EingabeErg){
            printf("Correct!\n");
        }
        else{
            printf("Wrong\n");
            printf("Richtiges Ergebnis: %d\n", erg);
        }

    }
}

void Ausgabe(int Zahl1, char Rechenoperator, int Zahl2){
    if(Zahl1 > Zahl2){
        printf("%d %c %d = ", Zahl1, Rechenoperator, Zahl2);
    }
    else{
        printf("%d %c %d = ", Zahl2, Rechenoperator, Zahl1);
    }
    
}

char SearchingForRechenoperator(int Zahl1, int Zahl2){
    int fiftyfifty = rand()%100 + 1;

    if(Zahl1 % Zahl2 == 0){
        return ':';
    }
    else if(Zahl1 <= 10 && Zahl2 <= 10){
        return 'x';
    }
    else if(Zahl1 - Zahl2 >= 0 || Zahl2 - Zahl1 >= 0 && fiftyfifty >50){
        return '-';
    }
    else{
        return '+';
    }
}

int Rechnen(int Zahl1, int Zahl2, char Rechenoperator){
    if(Rechenoperator == ':'){
         return (Zahl1 / Zahl2);
    }
    else if(Rechenoperator == 'x'){
        return (Zahl1 * Zahl2);
    }
    else if(Rechenoperator == '-'){
        if(Zahl1>Zahl2){
            return (Zahl1 - Zahl2);
        }
        else{
            return (Zahl2 - Zahl1);
        }
    }
    else if(Rechenoperator == '+'){
        return (Zahl1 + Zahl2);
    }
}