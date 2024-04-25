#include <iostream>
#include "Gestor.h"
using namespace std;

Gestor* gestor = new Gestor();

void menu();
void menuReservas();
int menuOpciones();
int menuOpcionesReserva();

int main()
{
	menu();
}

void menu() {
	int op;
	bool res = true;
	while (res) {
		op = menuOpciones();
		if (op != 4) {
			switch (op) {
			case 1:
				system("cls");
				cout << "\n  1.  Realizar reservacion\n";
				int val;
				menuReservas();
				break;
			case 2:
				system("cls");
				cout << "\n  2.  Mostrar reservas\n";
				gestor->mostrarReservas();
				getwchar();
				getwchar();
				break;
			case 3:
				system("cls");
				cout << "\n  3.  Mostrar cola de espera\n";
				gestor->mostrarCola();
				getwchar();
				getwchar();
				break;
			}
		}
		else {
			res = false;
		}
	}
}

void menuReservas() {
	int op;
	bool res = true;
	while (res) {
		op = menuOpcionesReserva();
		if (op != 4) {
			switch (op) {
			case 1:
				system("cls");
				cout << "\n  1.  Realizar reservacion en asiento preferencial\n";
				int val;
				cout << "Agregar posicion del asiento: ";
				cin >> val;
				gestor->agregarListaPreferencial(val);
				getwchar();
				getwchar();
				break;
			case 2:
				system("cls");
				cout << "\n  2.  Realizar reservacion en graderia preferencial\n";
				gestor->agregarPila();
				getwchar();
				getwchar();
				break;
			case 3:
				system("cls");
				cout << "\n  3.  Realizar reservacion en graderia general\n";
				gestor->agregarListaGeneral();
				getwchar();
				getwchar();
				break;
			}
		}
		else {
			res = false;
		}
	}
}

int menuOpciones() {
	int op;
	system("cls");
	cin.clear();
	cout << "  \n Reservacion de entradas para el teatro \n";
	cout << "  -------------------------------------\n";
	cout << "  1.   Realizar reservacion\n";
	cout << "  2.   Mostrar reservas\n";
	cout << "  3.   Mostrar cola de espera\n";
	cout << "\n";
	cout << "  4.  Salir\n";
	cout << "  -------------------------------------\n";
	cout << "  Ingrese la opcion: ";
	cin >> op;
	if (op > 4) {
		cout << "Opcion invalida, ingrese nuevamente";
		menuOpciones();
	}
	return op;
}

int menuOpcionesReserva() {
	int op;
	system("cls");
	cin.clear();
	cout << "  \n Seleccione la localidad \n";
	cout << "  -------------------------------------\n";
	cout << "  1.   Realizar reservacion en asiento preferencial\n";
	cout << "  2.   Realizar reservacion en graderia preferencial\n";
	cout << "  3.   Realizar reservacion en graderia general\n";
	cout << "\n";
	cout << "  4.  Salir\n";
	cout << "  -------------------------------------\n";
	cout << "  Ingrese la opcion: ";
	cin >> op;
	if (op > 4) {
		cout << "Opcion invalida, ingrese nuevamente";
		menuOpcionesReserva();
	}
	return op;
}
