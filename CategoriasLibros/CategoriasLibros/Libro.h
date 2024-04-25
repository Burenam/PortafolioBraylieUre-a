#pragma once
#include <string>
using namespace std;
class Libro
{
private:
	string codigo;
	string autor;
	string titulo;
	string editorial;
	string fechaLanzamiento;
	float precio;
	int cantidadInventario;
	string categoria;
public:
	Libro(string Pcodigo, string Pautor, string Peditorial, string PfechaLanzamiento,  float Pprecio, int PcantidadInventario);
	Libro();

	bool agotado();
	void desplegar();

	string getCodigo();
	void setCodigo(string);

	string getCategoria();
	void setCategoria(string);

	string getAutor();
	void setAutor(string);

	string getTitulo();
	void setTitulo(string);

	string getEditorial();
	void setEditorial(string);

	string getfechaLanzamiento();
	void setfechaLanzamiento(string);

	float getPrecio();
	void setPrecio(float);

	int getCantidadInventario();
	void setCantidadInventario(int);
};

