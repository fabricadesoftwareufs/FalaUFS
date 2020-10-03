using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Persistence
{
    public partial class FalaufsContext : DbContext
    {
        public FalaufsContext()
        {
        }

        public FalaufsContext(DbContextOptions<FalaufsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Agrupamento> Agrupamento { get; set; }
        public virtual DbSet<Eixo> Eixo { get; set; }
        public virtual DbSet<Enquete> Enquete { get; set; }
        public virtual DbSet<Moderacao> Moderacao { get; set; }
        public virtual DbSet<Opiniao> Opiniao { get; set; }
        public virtual DbSet<TipoModeracao> TipoModeracao { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
        public virtual DbSet<Voto> Voto { get; set; }
        public virtual DbSet<VotoValor> VotoValor { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=123456;database=Falaufs");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Agrupamento>(entity =>
            {
                entity.HasKey(e => e.IdAgrupamento)
                    .HasName("PRIMARY");

                entity.ToTable("agrupamento");

                entity.Property(e => e.IdAgrupamento)
                    .HasColumnName("id_agrupamento")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.Ativo)
                    .IsRequired()
                    .HasColumnName("ativo")
                    .HasMaxLength(1)
                    .IsFixedLength();

                entity.Property(e => e.Descricao).HasColumnName("descricao");

                entity.Property(e => e.DtAlt).HasColumnName("dt_alt");

                entity.Property(e => e.DtInc).HasColumnName("dt_inc");

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasColumnName("titulo")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Visivel)
                    .IsRequired()
                    .HasColumnName("visivel")
                    .HasMaxLength(1)
                    .IsFixedLength();
            });

            modelBuilder.Entity<Eixo>(entity =>
            {
                entity.HasKey(e => e.IdEixo)
                    .HasName("PRIMARY");

                entity.ToTable("eixo");

                entity.Property(e => e.IdEixo)
                    .HasColumnName("id_eixo")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.Ativo)
                    .IsRequired()
                    .HasColumnName("ativo")
                    .HasMaxLength(1)
                    .IsFixedLength();

                entity.Property(e => e.Descricao).HasColumnName("descricao");

                entity.Property(e => e.DtAlt).HasColumnName("dt_alt");

                entity.Property(e => e.DtInc).HasColumnName("dt_inc");

                entity.Property(e => e.Logo).HasColumnName("logo");

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasColumnName("titulo")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Visivel)
                    .IsRequired()
                    .HasColumnName("visivel")
                    .HasMaxLength(1)
                    .IsFixedLength();
            });

            modelBuilder.Entity<Enquete>(entity =>
            {
                entity.HasKey(e => e.IdEnquete)
                    .HasName("PRIMARY");

                entity.ToTable("enquete");

                entity.HasIndex(e => e.IdAgrupamento)
                    .HasName("RefAgrupamento31");

                entity.HasIndex(e => e.IdEixo)
                    .HasName("Ref213");

                entity.Property(e => e.IdEnquete)
                    .HasColumnName("id_enquete")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.Ativo)
                    .IsRequired()
                    .HasColumnName("ativo")
                    .HasMaxLength(1)
                    .IsFixedLength();

                entity.Property(e => e.Descricao).HasColumnName("descricao");

                entity.Property(e => e.DtAlt).HasColumnName("dt_alt");

                entity.Property(e => e.DtInc).HasColumnName("dt_inc");

                entity.Property(e => e.DtVenc).HasColumnName("dt_venc");

                entity.Property(e => e.IdAgrupamento)
                    .HasColumnName("id_agrupamento")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.IdEixo)
                    .HasColumnName("id_eixo")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.Pergunta)
                    .IsRequired()
                    .HasColumnName("pergunta");

                entity.Property(e => e.Visivel)
                    .IsRequired()
                    .HasColumnName("visivel")
                    .HasMaxLength(1)
                    .IsFixedLength();
            });

            modelBuilder.Entity<Moderacao>(entity =>
            {
                entity.HasKey(e => new { e.IdTipoModeracao, e.IdOpiniao })
                    .HasName("PRIMARY");

                entity.ToTable("moderacao");

                entity.HasIndex(e => e.IdOpiniao)
                    .HasName("RefOpiniao41");

                entity.Property(e => e.IdTipoModeracao)
                    .HasColumnName("id_tipo_moderacao")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.IdOpiniao)
                    .HasColumnName("id_opiniao")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.DtAlt).HasColumnName("dt_alt");

                entity.Property(e => e.DtInc).HasColumnName("dt_inc");
            });

            modelBuilder.Entity<Opiniao>(entity =>
            {
                entity.HasKey(e => e.IdOpiniao)
                    .HasName("PRIMARY");

                entity.ToTable("opiniao");

                entity.Property(e => e.IdOpiniao)
                    .HasColumnName("id_opiniao")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.Comentario).HasColumnName("comentario");

                entity.Property(e => e.DtAlt).HasColumnName("dt_alt");

                entity.Property(e => e.DtInc).HasColumnName("dt_inc");

                entity.Property(e => e.Negativos).HasColumnName("negativos");

                entity.Property(e => e.Positivos).HasColumnName("positivos");

                entity.Property(e => e.Visivel)
                    .IsRequired()
                    .HasColumnName("visivel")
                    .HasMaxLength(1)
                    .IsFixedLength();
            });

            modelBuilder.Entity<TipoModeracao>(entity =>
            {
                entity.HasKey(e => e.IdTipoModeracao)
                    .HasName("PRIMARY");

                entity.ToTable("tipo_moderacao");

                entity.Property(e => e.IdTipoModeracao)
                    .HasColumnName("id_tipo_moderacao")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.Descricao)
                    .HasColumnName("descricao")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.DtAlt).HasColumnName("dt_alt");

                entity.Property(e => e.DtInc).HasColumnName("dt_inc");

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasColumnName("titulo")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PRIMARY");

                entity.ToTable("usuario");

                entity.Property(e => e.IdUsuario)
                    .HasColumnName("id_usuario")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.Ativo)
                    .IsRequired()
                    .HasColumnName("ativo")
                    .HasMaxLength(1)
                    .IsFixedLength();

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasColumnName("cpf")
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.Property(e => e.DtAlt).HasColumnName("dt_alt");

                entity.Property(e => e.DtInc).HasColumnName("dt_inc");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasColumnName("nome")
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasColumnName("senha")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TelefonePrincipal)
                    .HasColumnName("telefone_principal")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Tipo)
                    .IsRequired()
                    .HasColumnName("tipo")
                    .HasMaxLength(1)
                    .IsFixedLength();
            });

            modelBuilder.Entity<Voto>(entity =>
            {
                entity.HasKey(e => e.IdVoto)
                    .HasName("PRIMARY");

                entity.ToTable("voto");

                entity.HasIndex(e => e.IdEnquete)
                    .HasName("RefEnquete33");

                entity.HasIndex(e => e.IdOpiniao)
                    .HasName("RefOpiniao36");

                entity.HasIndex(e => e.IdUsuario)
                    .HasName("RefUsuario35");

                entity.HasIndex(e => e.IdVotoValor)
                    .HasName("RefVoto_Valor34");

                entity.Property(e => e.IdVoto)
                    .HasColumnName("id_voto")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.DtInc).HasColumnName("dt_inc");

                entity.Property(e => e.IdEnquete)
                    .IsRequired()
                    .HasColumnName("id_enquete")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.IdOpiniao)
                    .HasColumnName("id_opiniao")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.IdUsuario)
                    .IsRequired()
                    .HasColumnName("id_usuario")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.IdVotoValor)
                    .IsRequired()
                    .HasColumnName("id_voto_valor")
                    .HasColumnType("binary(16)");
            });

            modelBuilder.Entity<VotoValor>(entity =>
            {
                entity.HasKey(e => e.IdVotoValor)
                    .HasName("PRIMARY");

                entity.ToTable("voto_valor");

                entity.Property(e => e.IdVotoValor)
                    .HasColumnName("id_voto_valor")
                    .HasColumnType("binary(16)");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasColumnName("descricao")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.DtAlt).HasColumnName("dt_alt");

                entity.Property(e => e.DtInc).HasColumnName("dt_inc");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
