using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace frontend
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            // It's better to hook up the Load event in designer or here:
            this.Load += Form1_Load;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // Navigate to an actual HTML file (not just a folder)
            webBrowser1.Navigate(@"file:///C:/Users/DELL/source/repos/ecommerce-microservices/index.html");
        }
    }
}
