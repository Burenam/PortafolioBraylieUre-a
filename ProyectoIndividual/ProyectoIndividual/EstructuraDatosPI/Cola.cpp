#include "Cola.h"

Cola::Cola() {}
Cola::Cola(Nodo* frente, Nodo* fin) {
    this->setFrente(frente); this->setFin(fin);}
Nodo* Cola::getFrente() { return this->frente; }
Nodo* Cola::getFin() { return this->fin; }
void Cola::setFrente(Nodo* frente) { this->frente = frente; }
void Cola::setFin(Nodo* fin) { this->fin = fin; }
void Cola::setLongitudCola(int cola) { longitudCola = cola; }
int Cola::getLongitudCola() { return longitudCola; }

bool Cola::addCola(Asiento* asi) {

    Nodo* nuevo = new Nodo();
    nuevo->setAsiento(asi);

    if (cola_vacia()) {
        setFrente(nuevo);
    }
    else {
        getFin()->setNext(nuevo);
    }
    setFin(nuevo);
    setLongitudCola(getLongitudCola() + 1);
    return true;
}

bool Cola::cola_vacia() { return (this->getFrente() == nullptr) ? true : false; }

string Cola::recorrerCola() {
    if (getFrente() != NULL) {
        Asiento* num = getFrente()->getAsiento();
        Nodo* aux = getFrente();
        if (getFrente() == getFin()) {
            setFrente(nullptr);
            setFin(nullptr);
        }
        else {
            setFrente(getFrente()->getNext());
        }
        addCola(num);
        delete aux;
        setLongitudCola(getLongitudCola() - 1);
        return "Numero en la cola: " + to_string(num->getId()) + " tipo de localidad: " + num->getTipo() + " precio de entrada: " + to_string(num->getPrecio());
    }
    else {
        return "Cola vacia";
    }
}