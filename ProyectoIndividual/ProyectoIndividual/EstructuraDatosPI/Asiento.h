#pragma once
#include <string>
using namespace std;
class Asiento
{
public:
	int id;
	string tipo;
	bool reservado;
	bool pagado;
	int precio;

	Asiento();
	Asiento(int, string, bool, bool, int);
	void setId(int);
	void setPrecio(int);
	void setTipo(string);
	void setReservado(bool);
	void setPagado(bool);
	int getId();
	int getPrecio();
	string getTipo();
	bool getReservado();
	bool getPagado();
};
