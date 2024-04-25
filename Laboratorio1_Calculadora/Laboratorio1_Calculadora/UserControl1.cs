using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Laboratorio1_Calculadora
{
    public partial class UserControl1: UserControl
    {
        public UserControl1()
        {
            InitializeComponent();
        }

        //DECLARACION DE VARIABLES

        string operador = "";
        double num1 = 0;
        double num2 = 0;

        private void label2_Click(object sender, EventArgs e)
        {

        }

        //SUMA
        private void button1_Click(object sender, EventArgs e)
        {
            operador = "+";
            num1 = Convert.ToDouble(txt_Result.Text);
            txt_Result.Text = "";
        }

        //RESTA
        private void btn_resta_Click(object sender, EventArgs e)
        {

            operador = "-";
            num1 = Convert.ToDouble(txt_Result.Text);
            txt_Result.Text = "";
        }

        //MULTIPLICACION
        private void btn_multi_Click(object sender, EventArgs e)
        {

            operador = "*";
            num1 = Convert.ToDouble(txt_Result.Text);
            txt_Result.Text = "";
        }

        //DIVISION
        private void btn_div_Click(object sender, EventArgs e)
        {

            operador = "/";
            num1 = Convert.ToDouble(txt_Result.Text);
            txt_Result.Text = "";
        }

        //UNO
        private void btn_1_Click(object sender, EventArgs e)
        {
            if(txt_Result.Text=="0") txt_Result.Text="";
            txt_Result.Text = txt_Result.Text + "1";
        }

        //LIMPIAR
        private void btn_CE_Click(object sender, EventArgs e)
        {
            lbl_result.Text = "0";
            txt_Result.Text = "0";
            num1 = 0;
            num2 = 0;
            operador = "";
        }

        //LIMPIAR CARACTER
        private void btn_BA_Click(object sender, EventArgs e)
        {
            if(lbl_result.Text!="0" | lbl_result.Text != "")
            {
                MessageBox.Show("Por favor seleccione la opcion CE para seguir usando la calculadora.");
            }
            else
            {
                if (txt_Result.TextLength == 1) txt_Result.Text = "0";
                else txt_Result.Text = txt_Result.Text.Substring(0, txt_Result.Text.Length - 1);
            }
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void txt_Result_TextChanged(object sender, EventArgs e)
        {

        }

        private void btn_2_Click(object sender, EventArgs e)
        {

            if (txt_Result.Text == "0") txt_Result.Text = "";
            txt_Result.Text = txt_Result.Text + "2";
        }

        private void btn_3_Click(object sender, EventArgs e)
        {

            if (txt_Result.Text == "0") txt_Result.Text = "";
            txt_Result.Text = txt_Result.Text + "3";
        }

        private void btn_4_Click(object sender, EventArgs e)
        {

            if (txt_Result.Text == "0") txt_Result.Text = "";
            txt_Result.Text = txt_Result.Text + "4";
        }

        private void btn_5_Click(object sender, EventArgs e)
        {

            if (txt_Result.Text == "0") txt_Result.Text = "";
            txt_Result.Text = txt_Result.Text + "5";
        }

        private void btn_6_Click(object sender, EventArgs e)
        {

            if (txt_Result.Text == "0") txt_Result.Text = "";
            txt_Result.Text = txt_Result.Text + "6";
        }

        private void btn_7_Click(object sender, EventArgs e)
        {

            if (txt_Result.Text == "0") txt_Result.Text = "";
            txt_Result.Text = txt_Result.Text + "7";
        }

        private void btn_8_Click(object sender, EventArgs e)
        {

            if (txt_Result.Text == "0") txt_Result.Text = "";
            txt_Result.Text = txt_Result.Text + "8";
        }

        private void btn_9_Click(object sender, EventArgs e)
        {

            if (txt_Result.Text == "0") txt_Result.Text = "";
            txt_Result.Text = txt_Result.Text + "9";
        }

        private void btn_0_Click(object sender, EventArgs e)
        {
            txt_Result.Text = txt_Result.Text + "0";
        }

        private void btn_punto_Click(object sender, EventArgs e)
        {

            txt_Result.Text = txt_Result.Text + ",";
        }

        private void btn_result_Click(object sender, EventArgs e)
        {
            num2 = Convert.ToDouble(txt_Result.Text);

            switch (operador)
            {
                case "+":
                    txt_Result.Text = num1 + "+" + num2;
                    lbl_result.Text = $"{num1 + num2}";
                    break;
                case "-":
                    txt_Result.Text = num1 + "-" + num2;
                    lbl_result.Text = $"{num1 - num2}";
                    break;
                case "*":
                    txt_Result.Text = num1 + "*" + num2;
                    lbl_result.Text = $"{num1 * num2}";
                    break;
                case "/":
                    txt_Result.Text = num1 + "/" + num2;
                    lbl_result.Text = $"{num1 / num2}";
                    break;
            }
        }
    }
}
