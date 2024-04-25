#include "Asiento.h"

Asiento::Asiento() {}
Asiento::Asiento(int id, string tipo, bool reserva, bool pagado, int precio){
	this->setId(id); this->setTipo(tipo); this->setReservado(reserva); this->setPagado(pagado); this->setPrecio(precio);}
void Asiento::setId(int _id) {id = _id;}
void Asiento::setPrecio(int _precio) { precio = _precio; }
void Asiento::setTipo(string _tipo) { tipo = _tipo; }
void Asiento::setReservado(bool _res) { reservado = _res; }
void Asiento::setPagado(bool _pagado) { pagado = _pagado; }
int Asiento::getId() { return id; }
int Asiento::getPrecio() { return precio; }
string Asiento::getTipo() { return tipo; }
bool Asiento::getReservado() { return reservado; }
bool Asiento::getPagado() { return pagado; }