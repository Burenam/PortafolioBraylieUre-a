#include "Gestor.h"
#include "Pila.h"
#include <iostream>
#include "Lista.h"
#include "Cola.h"

using namespace std;
Pila* miPila = new Pila();
Lista* miLista = new Lista();
Cola* miCola = new Cola();

Gestor::Gestor() {}

void Gestor::agregarPila() {
	if (miPila->reservarEspacio()) {
		cout << "Asiento " << to_string(miPila->getLongitud()) << " de la graderia preferencial reservado correctamente\n";
		cout << "Quedan " << to_string((20 - miPila->getLongitud())) << " asientos disponibles de la graderia preferencial\n";
	}
	else {
		if (miCola->addCola(new Asiento(miCola->getLongitudCola(), "Graderia_preferencial", false, false, 5500))) {
			cout << "Campo lleno\n";
			cout << "Agregado a la cola correctamente su posicion es: " << to_string(miCola->getLongitudCola());
		}
	}
};

void Gestor::agregarListaGeneral() {
	if (miLista->agregarGeneral()) {
		cout << "Asiento " << to_string(miLista->getLongGeneral()) << " general reservado correctamente\n";
		cout << "Quedan " << to_string((20 - miLista->getLongGeneral())) << " asientos generales disponibles\n";
	}

	else {
		cout << "Campos llenos\n";
		if (miCola->addCola(new Asiento(miCola->getLongitudCola(), "General", false, false, 4000))) {
			cout << "Agregado a la cola correctamente su posicion es: " << to_string(miCola->getLongitudCola());
		}
	}
};

void Gestor::agregarListaPreferencial(int num) {
	if (miLista->agregarPreferencial(num)) {
		cout << "Asiento " << num << " preferencial reservado correctamente\n";
		cout << "Quedan " << to_string((10 - miLista->getLongPreferencial())) << " asientos preferenciales disponibles\n";
	}
	else {
		cout << "Campo lleno\n";
		if (miLista->getLongPreferencial() == 10) {
			if (miCola->addCola(new Asiento(miCola->getLongitudCola(), "Preferencial", false, false, 7000))) {
				cout << "Agregado a la cola correctamente su posicion es: " << to_string(miCola->getLongitudCola());
			}
		}
	}

};

void Gestor::mostrarReservas() {
	cout << "La cantidad de reservas recolectadas de la lista de preferencial es de: " << to_string(miLista->getLongPreferencial()) << " espacios\n";
	cout << "La cantidad de reservas recolectadas de la lista de graderia general es de: " << to_string(miLista->getLongGeneral()) << " espacios\n";
	cout << "La cantidad de reservas recolectadas de la lista de graderia preferencial es de: " << to_string(miPila->getLongitud()) << " espacios\n";
};

void Gestor::mostrarCola() {
	int cant = miCola->getLongitudCola();
	if (cant == 0) {
		cout << "Lista vacia";
	}
	else {
		for (int i = 0; i < cant; i++) {
			cout << "Las reservas en la lista de espera son: " << miCola->recorrerCola() << "\n";
		}
	}
};