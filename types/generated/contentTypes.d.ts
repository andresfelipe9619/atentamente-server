SELECT
p.id,
    p.id_externo,
    COUNT(cp.id) AS num_correos,
    ARRAY_AGG(cp.correo ORDER BY cp.principal DESC) AS lista_de_correos
FROM participantes p
JOIN correo_participantes cp
ON cp.participante = p.id
GROUP BY p.id, p.id_externo
HAVING COUNT(cp.id) > 1
ORDER BY num_correos DESC;