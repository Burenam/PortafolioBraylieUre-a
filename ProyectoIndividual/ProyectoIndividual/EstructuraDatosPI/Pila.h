#pragma once
#include "Nodo.h"
class Pila
{
public:
	Nodo* pila;
	int longitudPila;

	Pila();
	Pila(Nodo*);
	Nodo* getPila() const;
	void setPila(Nodo*);
	void setLongitud(int);
	int getLongitud();
	bool reservarEspacio();
};