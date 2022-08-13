package com.shubham.ipldashboard.repository;

import java.time.LocalDate;
import java.util.List;


import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.shubham.ipldashboard.model.Match;


public interface MatchRespository extends CrudRepository<Match, Long> {
	
	List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName,String teamName2,Pageable pageable);
	
	@Query("select m from Match m where (m.team1=:teamName or m.team2=:teamName) and m.date between :startDate and :endDate order by date desc")
	List<Match> getMatchesByTeamBetweenDates(String teamName,LocalDate startDate,LocalDate endDate);
	
	default List<Match> findLatestMatchesbyTeam(String teamName,Pageable pageable){
		
		return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, pageable);
		
	}

}
