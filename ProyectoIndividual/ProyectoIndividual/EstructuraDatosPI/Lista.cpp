#include "Lista.h"

Lista::Lista() { longGeneral = 0; longPreferencial = 0; }
Lista::Lista(Nodo* _m_head) { Lista::setMHead(_m_head); } 
Nodo* Lista::getMHead() const { return m_head; }
void Lista::setMHead(Nodo* mHead) { m_head = mHead; }
void Lista::setLongPreferencial(int lonPref) { longPreferencial = lonPref; }
int Lista::getLongPreferencial() { return longPreferencial; }
void Lista::setLongGeneral(int lonGen) { longGeneral = lonGen; }
int Lista::getLongGeneral() { return longGeneral; }

bool Lista::agregarPreferencial(int num) {
	if (getLongPreferencial() < 10) {
		bool verificar = false;
		Nodo* Aux = getMHead();

		for (int i = 0; i < getLongPreferencial(); i++) {
			if (Aux->getAsiento()->getId() == num) {
				verificar = true;
				return false;
			}
			Aux = Aux->getNext();
		}
		if (!verificar) {
			Nodo* nuevo = new Nodo();
			nuevo->setAsiento(new Asiento(num, "Preferencial", false, false, 7000));
			Nodo* aux1 = getMHead();
			Nodo* aux2 = nullptr;
			while ((aux1 != nullptr) && (aux1->getAsiento()->getId() < num)) {
				aux2 = aux1;
				aux1 = aux1->getNext();
			}
			inicio(aux1, nuevo, aux2);
			nuevo->setNext(aux1);
			nuevo->getAsiento()->setReservado(true);
			setLongPreferencial(getLongPreferencial() + 1);

			return true;
		}
	}
	else {
		return false;
	}
}


void Lista::inicio(Nodo* aux1, Nodo* new_node, Nodo* aux2) {
	if (aux1 == getMHead()) {
		setMHead(new_node);
	}
	else {
		aux2->setNext(new_node);
	}
}

bool Lista::agregarGeneral() {
	if (getLongGeneral() < 20) {

		Nodo* nuevo = new Nodo();
		nuevo->setAsiento(new Asiento(getLongGeneral(), "General", false, false, 4000));
		if (getMHead() == nullptr) {
			setMHead(nuevo);
		}
		else {
			nuevo->setNext(this->getMHead());
			setMHead(nuevo);
		}
		setLongGeneral(getLongGeneral() + 1);
		return true;
	}
	else {
		return false;
	}
}