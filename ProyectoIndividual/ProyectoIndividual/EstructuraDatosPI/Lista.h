#pragma once
#include "Nodo.h"
class Lista
{
public:
	Nodo* m_head;
	int longPreferencial;
	int longGeneral;

	Lista();
	Lista(Nodo*);
	Nodo* getMHead() const;
	void setMHead(Nodo*);
	void setLongPreferencial(int);
	int getLongPreferencial();
	void setLongGeneral(int);
	int getLongGeneral();
	bool agregarPreferencial(int); 
	bool agregarGeneral(); 
	void inicio(Nodo*, Nodo*, Nodo*);
};