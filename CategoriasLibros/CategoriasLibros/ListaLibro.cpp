#include "ListaLibro.h"
#include <iostream>

ListaLibro::ListaLibro() {}

ListaLibro::ListaLibro(NodoLibro* cabeza)
{
    setMHead(cabeza);
}

NodoLibro* ListaLibro::getMHead() const {
    return cabeza;
}
void ListaLibro::setMHead(NodoLibro* cabeza) {
    ListaLibro::cabeza = cabeza;
}

int ListaLibro::getLongitud() {
    return longitud;
}
void ListaLibro::setLongitud(int longitud) {
    ListaLibro::longitud = longitud;
}

void ListaLibro::add_head(NodoLibro* aux1, NodoLibro* new_node, NodoLibro* aux2) {
    if (aux1 == getMHead()) {
        setMHead(new_node);
    }
    else {
        aux2->setSiguiente(new_node);
    }
}

void ListaLibro::add_ele(Libro* libro)
{
    NodoLibro* new_node = new NodoLibro(libro);//Crea el NodoRecord

    NodoLibro* aux1 = this->getMHead();
    NodoLibro* aux2 = nullptr;//En aux2 == aux1.siguiente
    //Para insertar al medio o al final
    while ((aux1 != nullptr) ) {//Verifica si la lista está vacía
        aux2 = aux1;
        aux1 = aux1->getSiguiente();
    }
    //Para insertar al inicio
    add_head(aux1, new_node, aux2);
    new_node->setSiguiente(aux1);
    setLongitud(getLongitud() + 1);
}



void ListaLibro::recorrerListaSimple() {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
    }
    else {
        NodoLibro* aux = getMHead();
        int contador = 1;
        do {
            std::cout << "\nLibro #" + to_string(contador) 
                + "\n Autor: " + aux->getLibro()->getAutor() 
                + "\n Editorial: " + aux->getLibro()->getEditorial()
                +"\n Titulo: " + aux->getLibro()->getTitulo() 
                + "\n Fecha lanzamiento: " + aux->getLibro()->getfechaLanzamiento() +
                "\n Precio: " + to_string(aux->getLibro()->getPrecio()) 
                + "\n Inventario: " + to_string(aux->getLibro()->getCantidadInventario()) 
                + "\n Codigo: " + aux->getLibro()->getCodigo() << "\n";
            aux = aux->getSiguiente();
            contador++;
        } while (aux != NULL);
    }
}

int ListaLibro::precioTotalLibros() {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
        return 0;
    }
    else {
        NodoLibro* aux = getMHead();
        int contador = 0;
        do {
            contador += (aux->getLibro()->getPrecio()) * (aux->getLibro()->getCantidadInventario());
            aux = aux->getSiguiente();
        } while (aux != NULL);
        return contador;
    }
}

void ListaLibro::anadirPorcentaje(string tipoOperacion, float porcentaje) {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
    }
    else {
        NodoLibro* aux = getMHead();
        int contador = 0;
        int precio = 0;
        float precioPor;
        do {
            precioPor = porcentaje / 100;
            contador = precioPor * (aux->getLibro()->getPrecio());
            if (tipoOperacion == "Sumar") {
                precio = (aux->getLibro()->getPrecio()) + (contador);
            }
            else {
                precio = (aux->getLibro()->getPrecio()) - (contador);
            }
            aux->getLibro()->setPrecio(precio);
            std::cout << "Precios actualizados" << "\n";
            aux = aux->getSiguiente();
        } while (aux != NULL);
        
    }
}

void ListaLibro::recorrerLibrosxCategoria(string nombre) {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
    }
    else {
        NodoLibro* aux = getMHead();
        int contador = 1;
        do {
            if (nombre == aux->getLibro()->getCategoria()) {
                std::cout << "\nLibro #" + to_string(contador) + "\n Autor: " + aux->getLibro()->getAutor() + "\n Editorial: " + aux->getLibro()->getEditorial()
                    + "\n Titulo: " + aux->getLibro()->getTitulo() + "\n Fecha lanzamiento: " + aux->getLibro()->getfechaLanzamiento() +
                    "\n Precio: " + to_string(aux->getLibro()->getPrecio()) + "\n Inventario: " + to_string(aux->getLibro()->getCantidadInventario())
                    + "\n Codigo: " + aux->getLibro()->getCodigo() << "\n Categoria: " + aux->getLibro()->getCategoria();
            }
            aux = aux->getSiguiente();
            contador++;
        } while (aux != NULL);
    }
}

void ListaLibro::recorrerLibrosAgotados() {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
    }
    else {
        NodoLibro* aux = getMHead();
        int contador = 1;
        do {
            if (aux->getLibro()->getCantidadInventario() <= 0) {
                std::cout << "\nLibro #" + to_string(contador) 
                    + "\n Autor: " + aux->getLibro()->getAutor() 
                    + "\n Editorial: " + aux->getLibro()->getEditorial()
                    + "\n Titulo: " + aux->getLibro()->getTitulo() 
                    + "\n Fecha lanzamiento: " + aux->getLibro()->getfechaLanzamiento() +
                    "\n Precio: " + to_string(aux->getLibro()->getPrecio()) 
                    + "\n Inventario: " + to_string(aux->getLibro()->getCantidadInventario())
                    + "\n Codigo: " + aux->getLibro()->getCodigo() << "\n";
            }
            aux = aux->getSiguiente();
            contador++;
        } while (aux != NULL);
    }
}

void ListaLibro::recorrerLibrosNoAgotados() {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
    }
    else {
        NodoLibro* aux = getMHead();
        int contador = 1;
        do {
            if (aux->getLibro()->getCantidadInventario() > 0) {
                std::cout << "\nLibro #" + to_string(contador) 
                    + "\n Autor: " + aux->getLibro()->getAutor() 
                    + "\n Editorial: " + aux->getLibro()->getEditorial()
                    + "\n Titulo: " + aux->getLibro()->getTitulo() 
                    + "\n Fecha lanzamiento: " + aux->getLibro()->getfechaLanzamiento() +
                    "\n Precio: " + to_string(aux->getLibro()->getPrecio()) 
                    + "\n Inventario: " + to_string(aux->getLibro()->getCantidadInventario())
                    + "\n Codigo: " + aux->getLibro()->getCodigo() << "\n";
            }
            aux = aux->getSiguiente();
            contador++;
        } while (aux != NULL);
    }
}

int ListaLibro::recorrerExistencia0() {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
        return 0;
    }
    else {
        NodoLibro* aux = getMHead();
        int contador = 1;
        int cant = 0;
        do {
            if (aux->getLibro()->getCantidadInventario() <= 0) {
                cant++;
            }
            aux = aux->getSiguiente();
            contador++;
        } while (aux != NULL);
        return cant;
    }
}

void ListaLibro::modificarLibro(string codigo, string autor, string editorial, string fechaLanzamiento, string titulo, float precio, int cantidadInventario) {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
    }
    else {
        NodoLibro* aux = getMHead();
        do {
            if (codigo == aux->getLibro()->getCodigo()) 
            {
                aux->getLibro()->setAutor(autor);
                aux->getLibro()->setCantidadInventario(cantidadInventario);
                aux->getLibro()->setEditorial(editorial);
                aux->getLibro()->setfechaLanzamiento(fechaLanzamiento);
                aux->getLibro()->setPrecio(precio);
                aux->getLibro()->setTitulo(titulo);
            }
            aux = aux->getSiguiente();
        } while (aux != NULL);
    }
}

void ListaLibro::modificarLibroStatus(string codigo, int inventario) {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
    }
    else {
        NodoLibro* aux = getMHead();
        do {
            if (codigo == aux->getLibro()->getCodigo())
            {
                aux->getLibro()->setCantidadInventario(inventario);
            }
            aux = aux->getSiguiente();
        } while (aux != NULL);
    }
}

bool ListaLibro::getStatus(string codigo) {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
        return false;
    }
    else {
        NodoLibro* aux = getMHead();
        do {
            if (codigo == aux->getLibro()->getCodigo())
            {
                if (aux->getLibro()->getCantidadInventario() <= 0) 
                {
                    return true;
                }
                else {
                    return false;
                }
                
            }
  
            aux = aux->getSiguiente();
        } while (aux != NULL);
    }
}

void ListaLibro::asociarCategoria(string codigo, string categoria) {
    if (getMHead() == NULL) {
        std::cout << "Lista vacia" << "\n";
    }
    else {
        NodoLibro* aux = getMHead();
        do {
            if (codigo == aux->getLibro()->getCodigo())
            {
                aux->getLibro()->setCategoria(categoria);
                std::cout << "Libro asociado" << "\n";
            }

            aux = aux->getSiguiente();
        } while (aux != NULL);
    }
}

bool ListaLibro::eliminarLibro(string libro) 
{
    NodoLibro* aux, * ant;
    int i, pos = buscarPosicionLibro(libro);
    if (pos == -1) {
        return false;
    }
    else {
        for (i = 1, ant = 0, aux = getMHead(); i < pos; i++) {
            ant = aux;
            aux = aux->getSiguiente();
        }

        if (ant != 0) {
            ant->setSiguiente(aux->getSiguiente());
        }
        else {
            setMHead(aux->getSiguiente());
        }

        delete aux;
        setLongitud(getLongitud() - 1);
        return true;
    }
}


int ListaLibro::buscarPosicionLibro(string libro) {
    NodoLibro* aux;
    int pos;
    for (aux = getMHead(), pos = 1; aux != NULL; aux = aux->getSiguiente(), pos++) {
        if (aux->getLibro()->getCodigo() == libro) {
            return pos;
        }
    }
    if (aux == 0) {
        pos = -1;
    }
    return pos;
}
