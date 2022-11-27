package com.Springweb.domain.entity.boardtest;

import com.Springweb.domain.dto.BtcategoryDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BtcategoryRepository extends JpaRepository<BtcategoryEntity,Integer> {

}
