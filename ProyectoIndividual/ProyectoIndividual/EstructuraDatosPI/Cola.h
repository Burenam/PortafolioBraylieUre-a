#pragma once
#include "Nodo.h"
class Cola
{
public:
	Nodo* frente;
	Nodo* fin;
	int longitudCola;

	Cola();
	Cola(Nodo*, Nodo*);
	Nodo* getFrente();
	Nodo* getFin();
	int getLongitudCola();
	void setFrente(Nodo* frente);
	void setFin(Nodo* fin);
	void setLongitudCola(int);
	bool addCola(Asiento*);
	string recorrerCola();
	bool cola_vacia();
};