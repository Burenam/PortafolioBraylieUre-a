#pragma once
#include "Categoria.h"
class NodoCategoria
{
private:
	Categoria* categoria;
	NodoCategoria* sgtLibro;
public:
	NodoCategoria(Categoria*);
	NodoCategoria();

	NodoCategoria* getSiguiente() const;
	void setSiguiente(NodoCategoria*);
	Categoria* getCategoria() const;
	void setCategoria(Categoria*);

};