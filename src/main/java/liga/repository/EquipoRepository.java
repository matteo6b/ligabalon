package liga.repository;

import liga.domain.Equipo;
import liga.domain.Jugador;
import org.springframework.data.jpa.repository.*;

import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Equipo entity.
 */
public interface EquipoRepository extends JpaRepository<Equipo,Long> {

    @Query("SELECT j from Jugador j WHERE j.equipo.id=:id and j.canastasTotales>=:canastas    ")
    List<Jugador> findByEquipoOrderByCanastasTotales(@Param("id") Long id,@Param("canastas") int canastas);


}
