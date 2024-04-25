#include "Pila.h"

Pila::Pila() { }
Pila::Pila(Nodo* pila) { Pila::setPila(pila); }
Nodo* Pila::getPila() const { return pila; }
void Pila::setPila(Nodo* ppila) { pila = ppila; }
void Pila::setLongitud(int _lon) { longitudPila = _lon; }
int Pila::getLongitud() { return longitudPila; }

bool Pila::reservarEspacio() {
	if (getLongitud() >= 20) {
		return false;
	}
	else {
		Nodo* nuevo = new Nodo();
		nuevo->setAsiento(new Asiento(getLongitud(), "Graderia_Preferencial", false, false, 5500));
		if (getPila() == nullptr) {
			setPila(nuevo);
		}
		else {
			nuevo->setNext(getPila());
			setPila(nuevo);
		}
		setLongitud(getLongitud() + 1);
		return true;
	}
}