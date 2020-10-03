using System;
using System.Collections.Generic;

namespace Persistence
{
    public partial class Enquete
    {
        public byte[] IdEnquete { get; set; }
        public DateTimeOffset DtVenc { get; set; }
        public DateTime DtInc { get; set; }
        public DateTime DtAlt { get; set; }
        public string Descricao { get; set; }
        public string Ativo { get; set; }
        public string Visivel { get; set; }
        public byte[] IdEixo { get; set; }
        public string Pergunta { get; set; }
        public byte[] IdAgrupamento { get; set; }
    }
}
