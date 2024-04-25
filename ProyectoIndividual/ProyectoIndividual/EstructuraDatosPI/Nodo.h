#pragma once
#include "Asiento.h"
class Nodo {
private:
	Nodo* next;
	Asiento* asiento;
public:
	Nodo();
	Nodo(Asiento*);
	Nodo* getNext();
	void setNext(Nodo*);
	Asiento* getAsiento();
	void setAsiento(Asiento*);
};
