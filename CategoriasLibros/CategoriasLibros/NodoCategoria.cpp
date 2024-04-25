#include "NodoCategoria.h"

NodoCategoria::NodoCategoria(Categoria* categoria)
{
	setCategoria(categoria);
}

NodoCategoria::NodoCategoria()
{
	setSiguiente(NULL);
}

NodoCategoria* NodoCategoria::getSiguiente() const
{
	return sgtLibro;
}

void NodoCategoria::setSiguiente(NodoCategoria* sig) {
	NodoCategoria::sgtLibro = sig;
}

Categoria* NodoCategoria::getCategoria() const {
	return categoria;
}
void NodoCategoria::setCategoria(Categoria* categoria) {
	NodoCategoria::categoria = categoria;
}
