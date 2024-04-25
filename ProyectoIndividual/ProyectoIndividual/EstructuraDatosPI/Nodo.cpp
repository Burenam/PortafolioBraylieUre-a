#include "Nodo.h"
Nodo::Nodo() {}
Nodo::Nodo(Asiento* asiento) { this->setAsiento(asiento); }
Nodo* Nodo::getNext() { return Nodo::next; }
Asiento* Nodo::getAsiento() { return Nodo::asiento; }
void Nodo::setNext(Nodo* _next) { Nodo::next = _next; }
void Nodo::setAsiento(Asiento* _asiento) { Nodo::asiento = _asiento; }