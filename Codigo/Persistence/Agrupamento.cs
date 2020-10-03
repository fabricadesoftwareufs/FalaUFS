using System;
using System.Collections.Generic;

namespace Persistence
{
    public partial class Agrupamento
    {
        public byte[] IdAgrupamento { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public string Ativo { get; set; }
        public string Visivel { get; set; }
        public DateTimeOffset DtInc { get; set; }
        public DateTimeOffset DtAlt { get; set; }
    }
}
