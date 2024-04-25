#include <iostream>
#include "libro.h"
#include "ListaLibro.h"
#include "Categoria.h"
#include "ListaCategorias.h"

using namespace std;

//PROTOTIPO DE MENUS
void imprimirMenuPrincipal();
int menuPrincipal(int);
void imprimirMenuLibros();
void imprimirMenuCategorias();
void imprimirMenuReportesEstadisticas();

//PROTOTIPOS METODOS DEL JUEGO
void agregarLibro();
void modificarInfoLibros();
void modificarStatusLibros();
void eliminarLibro();
void agregarCategoria();
void modificarCategoria();
void eliminarCategoria();
void asociarLibroACategoria();
void imprimirLibrosCategoria();
void cantidadExistencia0();
void actualizarPorcentaje();

//VARIABLES ESTATICAS
static Libro* libro = new Libro();
static ListaLibro listaLibros;
static ListaCategorias listaCategoria;


int main(){
	imprimirMenuPrincipal();
}


//MENUS
void imprimirMenuPrincipal()
{
	int answer;
	bool keepLooping = true;

	do
	{
		cout << "-------------------------------------" << endl;
		cout << "    MENU PRINCIPAL DEL LA LIBRERIA" << endl;
		cout << "-------------------------------------" << endl;
		cout << "Favor digite opcion:" << endl;
		cout << "1. Menu de libros." << endl;
		cout << "2. Menu de categorias." << endl;
		cout << "3. Reportes y estadisticas." << endl;
		cout << "0. Salir." << endl;
		cout << "-------------------------------------" << endl;
		cin >> answer;

		menuPrincipal(answer);

		if (answer == 0)
		{
			keepLooping = false;
		}
		else
		{
			keepLooping = true;
		}
	} while (keepLooping);

}

int menuPrincipal(int answer)
{
	switch (answer)
	{
	case 1:
		imprimirMenuLibros();
		break;
	case 2:
		imprimirMenuCategorias();
		break;
	case 3:
		imprimirMenuReportesEstadisticas();
		break;
	case 0:
		cout << "Gracias por usar el sistema." << endl;
		break;
	default:
		cout << "Opcion incorrecta. Favor digite de nuevo." << endl;
	}
	return answer;
}

void imprimirMenuLibros()
{
	int answer;
	bool keepLooping = true;

	do
	{
		cout << "-------------------------------------" << endl;
		cout << "    MENU DE OPCIONES DE LIBROS" << endl;
		cout << "-------------------------------------" << endl;
		cout << "Favor digite opcion:" << endl;
		cout << "1. Agregar libros." << endl;
		cout << "2. Modificar informaci�n de libro." << endl;
		cout << "3. Modificar status de libro." << endl;
		cout << "4. Eliminar libro." << endl;
		cout << "5. Desplegar lista de libros." << endl;
		cout << "6. Actualizaci�n de precio de libros." << endl;
		cout << "0. Salir." << endl;
		cout << "-------------------------------------" << endl;
		cin >> answer;

		switch (answer)
		{
		case 1:
			agregarLibro();
			break;
		case 2:
			modificarInfoLibros();
			break;
		case 3:
			modificarStatusLibros();
			break;
		case 4:
			eliminarLibro();
			break;
		case 5:
			listaLibros.recorrerListaSimple();
			break;
		case 6:
			actualizarPorcentaje();
			break;
		default:
			cout << "Opcion incorrecta. Favor digite de nuevo." << endl;
		}

		if (answer == 0)
		{
			keepLooping = false;
		}
		else
		{
			keepLooping = true;
		}
	} while (keepLooping);

}

void imprimirMenuCategorias()
{
	int answer;
	bool keepLooping = true;

	do
	{
		cout << "-------------------------------------" << endl;
		cout << "    MENU DE OPCIONES DE CATEGORIA" << endl;
		cout << "-------------------------------------" << endl;
		cout << "Favor digite opcion:" << endl;
		cout << "1. Agregar categoria." << endl;
		cout << "2. Modificar informaci�n de categoria." << endl;
		cout << "3. Agregar libro a una categoria." << endl;
		cout << "4. Eliminar categoria." << endl;
		cout << "5. Desplegar lista de categorias." << endl;
		cout << "6. Desplegar los libros de categor�a en especifica." << endl;
		cout << "0. Salir." << endl;
		cout << "-------------------------------------" << endl;
		cin >> answer;

		switch (answer)
		{
		case 1:
			agregarCategoria();
			break;
		case 2:
			modificarCategoria();
			break;
		case 3:
			asociarLibroACategoria();
			break;
		case 4:
			eliminarCategoria();
			break;
		case 5:
			listaCategoria.recorrerListaSimple();
			break;
		case 6:
			imprimirLibrosCategoria();
			break;
		default:
			cout << "Opcion incorrecta. Favor digite de nuevo." << endl;
		}

		if (answer == 0)
		{
			keepLooping = false;
		}
		else
		{
			keepLooping = true;
		}
	} while (keepLooping);

}

void imprimirMenuReportesEstadisticas()
{
	int answer;
	bool keepLooping = true;

	do
	{
		cout << "-------------------------------------" << endl;
		cout << "    MENU DE OPCIONES DE REPORTES" << endl;
		cout << "-------------------------------------" << endl;
		cout << "Favor digite opcion:" << endl;
		cout << "1. Precio total del inventario existente." << endl;
		cout << "2. Cantidad de libros con existencia en cero." << endl;
		cout << "3. Lista detallada de los libros agotados." << endl;
		cout << "4. Lista detallada de libros no agotados." << endl;
		cout << "5. Desplegar lista de libros con todos sus detalles." << endl;
		cout << "6. Desplegar lista de categor�as." << endl;
		cout << "7. Desplegar los libros de una categor�a espec�fica." << endl;
		cout << "0. Salir." << endl;
		cout << "-------------------------------------" << endl;
		cin >> answer;   

		switch (answer)
		{
		case 1:
			std::cout << "Su precio total de inventario es de: "+ to_string(listaLibros.precioTotalLibros()) << "\n";
			break;
		case 2:
			cantidadExistencia0();
			break;
		case 3:
			listaLibros.recorrerLibrosAgotados();
			break;
		case 4:
			listaLibros.recorrerLibrosNoAgotados();
			break;
		case 5:
			listaLibros.recorrerListaSimple();
			break;
		case 6:
			listaCategoria.recorrerListaSimple();
			break;
		case 7:
			imprimirLibrosCategoria();
			break;
		default:
			cout << "Opcion incorrecta. Favor digite de nuevo." << endl;
		}

		if (answer == 0)
		{
			keepLooping = false;
		}
		else
		{
			keepLooping = true;
		}
	} while (keepLooping);

}


//FUNCIONES DEL MENU DE LIBROS
void agregarLibro()
{
	string codigo, titulo, editorial, autor, fechaLanzamiento;
	float precio;
	int cantidadInventario;
	cout << "Favor digite el codigo del libro: " << flush;
	cin >> codigo;
	cout << "Favor digite el titulo del libro: " << flush;
	cin >> titulo;
	cout << "Favor digite el autor del libro: " << flush;
	cin >> autor;
	cout << "Favor digite la editorial del libro: " << flush;
	cin >> editorial;
	cout << "Favor digite la fecha de lanzamiento del libro: " << flush;
	cin >> fechaLanzamiento;
	cout << "Favor digite el precio del libro: " << flush;
	cin >> precio;
	cout << "Favor digite la cantidad de inventario de� libro: " << flush;
	cin >> cantidadInventario;
	Libro* libro = new Libro();
	libro->setAutor(autor);
	libro->setCantidadInventario(cantidadInventario);
	libro->setCodigo(codigo);
	libro->setEditorial(editorial);
	libro->setfechaLanzamiento(fechaLanzamiento);
	libro->setPrecio(precio);
	libro->setTitulo(titulo);

	listaLibros.add_ele(libro);
}

void modificarInfoLibros()
{
	string codigo, titulo, editorial, autor, fechaLanzamiento;
	float precio;
	int cantidadInventario;
	cout << "Favor digite el codigo del libro que desea modificar: " << flush;
	cin >> codigo;
	cout << "Favor digite el titulo del libro: " << flush;
	cin >> titulo;
	cout << "Favor digite el autor del libro: " << flush;
	cin >> autor;
	cout << "Favor digite la editorial del libro: " << flush;
	cin >> editorial;
	cout << "Favor digite la fecha de lanzamiento del libro: " << flush;
	cin >> fechaLanzamiento;
	cout << "Favor digite el precio del libro: " << flush;
	cin >> precio;
	cout << "Favor digite la cantidad de inventario del libro: " << flush;
	cin >> cantidadInventario;

	listaLibros.modificarLibro(codigo, autor, editorial, fechaLanzamiento, titulo, precio, cantidadInventario);
}

void modificarStatusLibros()
{
	string codigo;
	int cantidadInventario;
	cout << "Favor digite el codigo del libro al que desea modificar su estatus: " << flush;
	cin >> codigo;
	cout << "Favor digite la cantidad de inventario del libro: " << flush;
	cin >> cantidadInventario;
	listaLibros.modificarLibroStatus(codigo,cantidadInventario);
}

void eliminarLibro() {
	string codigo;
	cout << "Favor digite el codigo del libro: " << flush;
	cin >> codigo;
	if (listaLibros.eliminarLibro(codigo)) {
		cout << "Libro eliminado correctamente \n" << flush;
	}
	else {
		cout << "No se encuentra el libro ingresado \n" << flush;
	}
}

void actualizarPorcentaje() {
	string tipo;
	float porcentaje;
	cout << "Favor digite el tipo de operacion (Sumar/Restar): " << flush;
	cin >> tipo;
	cout << "Favor digite el porcentaje que desea " + tipo  + ": "<< flush;
	cin >> porcentaje;

	listaLibros.anadirPorcentaje(tipo,porcentaje);

}

//FUNCIONES DEL MENU DE CATEGORIAS

void agregarCategoria() {
	string nombre, descr;
	cout << "Favor digite el nombre de la categoria: " << flush;
	cin >> nombre;
	cout << "Favor digite la descripcion de la categoria: " << flush;
	cin >> descr;
	Categoria* cat = new Categoria();
	cat->setDescrip(descr);
	cat->setNombre(nombre);

	listaCategoria.add_ele(cat);
}

void modificarCategoria() {
	string nombre, descr;
	cout << "Favor digite el nombre de la categoria que desea modificar: " << flush;
	cin >> nombre;
	cout << "Favor digite la descripcion de la categoria: " << flush;
	cin >> descr;

	listaCategoria.modificarCategoria(nombre, descr);
}

void eliminarCategoria() {
	string codigo;
	cout << "Favor digite el nombre de la categoria: " << flush;
	cin >> codigo;
	if (listaCategoria.eliminarLibro(codigo)) {
		cout << "Categoria eliminada correctamente \n" << flush;
	}
	else {
		cout << "No se encuentra la categoria ingresado \n" << flush;
	}
}

void asociarLibroACategoria() {
	string nombre, codigo;
	cout << "Favor digite el nombre de la categoria: " << flush;
	cin >> nombre;
	cout << "Favor digite el codigo del libro: " << flush;
	cin >> codigo;

	listaLibros.asociarCategoria(codigo,nombre);
}

//FUNCIONES DEL MENU DE REPORTES

void imprimirLibrosCategoria() {
	string nombre;
	cout << "Favor digite el nombre de la categoria: " << flush;
	cin >> nombre;

	listaLibros.recorrerLibrosxCategoria(nombre);
}

void cantidadExistencia0(){
	int libros = listaLibros.recorrerExistencia0();
	if (libros == 0) {
		cout << "No hay libros con existencia en cero." << endl;
	}
	else {
		cout << "La cantidad de libros con existencia en cero es de:" + to_string(libros) << endl;
	}
}