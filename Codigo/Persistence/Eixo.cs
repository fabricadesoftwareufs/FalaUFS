using System;
using System.Collections.Generic;

namespace Persistence
{
    public partial class Eixo
    {
        public byte[] IdEixo { get; set; }
        public string Logo { get; set; }
        public string Visivel { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public string Ativo { get; set; }
        public DateTime DtInc { get; set; }
        public DateTime DtAlt { get; set; }
    }
}
