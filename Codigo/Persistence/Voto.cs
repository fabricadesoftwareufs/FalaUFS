using System;
using System.Collections.Generic;

namespace Persistence
{
    public partial class Voto
    {
        public byte[] IdVoto { get; set; }
        public DateTimeOffset DtInc { get; set; }
        public byte[] IdEnquete { get; set; }
        public byte[] IdVotoValor { get; set; }
        public byte[] IdUsuario { get; set; }
        public byte[] IdOpiniao { get; set; }
    }
}
